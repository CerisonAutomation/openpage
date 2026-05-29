/**
 * Enterprise Core Types - Foundation for CQRS, Repository, and DDD patterns
 * @module core/types
 */

// Branded type pattern for type safety
export type Brand<K, T> = K & { readonly __brand: T };

// Entity base interface with strict typing
export interface Entity<TId extends string | number = string> {
  readonly id: TId;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

// Aggregate root marker interface
export interface AggregateRoot<TId extends string | number = string> extends Entity<TId> {
  readonly version: number;
}

// Value Object base - immutable by design
export abstract class ValueObject<T> {
  protected readonly props: Readonly<T>;

  constructor(props: T) {
    this.props = Object.freeze(props);
  }

  equals(vo?: ValueObject<T>): boolean {
    if (vo === null || vo === undefined) return false;
    return JSON.stringify(this.props) === JSON.stringify(vo.props);
  }
}

// Result pattern for error handling (functional approach)
export type Result<T, E = Error> =
  | { success: true; value: T }
  | { success: false; error: E };

export const Result = {
  ok<T>(value: T): Result<T, never> {
    return { success: true, value };
  },
  err<E>(error: E): Result<never, E> {
    return { success: false, error };
  },
  isOk<T, E>(result: Result<T, E>): result is { success: true; value: T } {
    return result.success;
  },
  isErr<T, E>(result: Result<T, E>): result is { success: false; error: E } {
    return !result.success;
  },
};

// Option pattern for nullable types
export type Option<T> = T | null;

export const Option = {
  isSome<T>(opt: Option<T>): opt is T {
    return opt !== null && opt !== undefined;
  },
  isNone<T>(opt: Option<T>): opt is null {
    return opt === null || opt === undefined;
  },
  map<T, U>(opt: Option<T>, fn: (val: T) => U): Option<U> {
    return Option.isSome(opt) ? fn(opt) : null;
  },
  getOrElse<T>(opt: Option<T>, defaultValue: T): T {
    return Option.isSome(opt) ? opt : defaultValue;
  },
};

// Domain event interface
export interface DomainEvent {
  readonly type: string;
  readonly aggregateId: string;
  readonly occurredAt: Date;
  readonly payload: Readonly<Record<string, unknown>>;
}

// Command interface (CQRS - Command side)
export interface Command {
  readonly type: string;
  readonly payload: Readonly<Record<string, unknown>>;
  readonly metadata?: CommandMetadata;
}

export interface CommandMetadata {
  readonly correlationId?: string;
  readonly causationId?: string;
  readonly userId?: string;
  readonly timestamp: Date;
}

// Query interface (CQRS - Query side)
export interface Query {
  readonly type: string;
  readonly payload: Readonly<Record<string, unknown>>;
}

// Pagination types
export interface PaginationParams {
  readonly page: number;
  readonly pageSize: number;
  readonly sortBy?: string;
  readonly sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResult<T> {
  readonly items: T[];
  readonly total: number;
  readonly page: number;
  readonly pageSize: number;
  readonly totalPages: number;
}

// Filter types for repository queries
export type FilterOperator = 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'like' | 'in' | 'nin' | 'contains';

export interface FilterCondition {
  readonly field: string;
  readonly operator: FilterOperator;
  readonly value: unknown;
}

export interface QueryFilters {
  readonly conditions: FilterCondition[];
  readonly logicalOperator?: 'and' | 'or';
}

// Tenant context for multi-tenancy
export interface TenantContext {
  readonly tenantId: string;
  readonly userId: string;
  readonly roles: string[];
  readonly permissions: string[];
}

// Audit metadata
export interface AuditMetadata {
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly tenantId: string;
}
