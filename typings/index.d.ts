export class Collection<K, V> extends Map<K, V> {
  ["constructor"]: typeof Collection;

  /**
   * The first item in this collection.
   */
  get first(): V | null;

  /**
   * The last item in this collection.
   */
  get last(): V | null;

  /**
   * Get an array of all values in this collection.
   */
  array(): Array<V>;

  /**
   * Tests whether or not an entry in this collection meets the provided predicate.
   * @param predicate A predicate that tests all entries.
   * @param thisArg An optional binding for the predicate function.
   */
  some(predicate: (value: V, key: K, col: this) => unknown, thisArg?: unknown): boolean;

  /**
   * Collection#forEach but it returns the collection instead of nothing.
   * @param fn The function to be ran on all entries.
   * @param thisArg An optional binding for the fn parameter.
   */
  each(fn: (value: V, key: K, col: this) => unknown, thisArg?: unknown): this;

  /**
   * Sweeps entries from the collection.
   * @param fn
   * @param thisArg
   */
  sweep(fn: (value: V, key: K, col: this) => boolean, thisArg?: unknown): number;

  /**
   * Finds a value using a predicate from this collection
   * @param fn Function used to find the value.
   * @param thisArg Optional binding to use.
   */
  find(fn: (value: V, key: K, col: this) => boolean, thisArg?: unknown): V | null;

  /**
   * Reduces this collection down into a single value.
   * @param fn The function used to reduce this collection.
   * @param acc The accumulator.
   * @param thisArg Optional binding for the reducer function.
   */
  reduce<A>(fn: (acc: A, value: V, key: K, col: this) => A, acc: A, thisArg?: unknown): A;

  /**
   * Returns a filtered collection based on the provided predicate.
   * @param fn The predicate used to determine whether or not an entry can be passed to the new collection.
   * @param thisArg Optional binding for the predicate.
   */
  filter(fn: (value: V, key: K, col: this) => boolean, thisArg?: unknown): Collection<K, V>;

  /**
   * Maps this collection into an array. Array#map equivalent.
   * @param fn Function used to map values to an array.
   * @param thisArg Optional binding for the map function.
   */
  map<T>(fn: (value: V, key: K, col: this) => T, thisArg?: unknown): T[];

  /**
   * Sorts the entries in-place in this collection.
   * @param compareFunction Function to determine how this collection should be sorted
   */
  sort(compareFunction?: (firstValue: V, secondValue: V, firstKey?: K, secondKey?: K) => number): this;

  /**
   * Sorts entries in a new collection
   * @param compareFunction Function to determine how the resulting collection should be sorted
   */
  sorted(compareFunction?: (firstValue: V, secondValue: V, firstKey?: K, secondKey?: K) => number): Collection<K, V>;

  /**
   * Returns a clone of this collection.
   */
  clone(): Collection<K, V>;
}
