
export interface ApplicationReadDTO {
  readonly name?: string

  readonly data: unknown

  readonly uuid: string

  readonly osProcessId: number | undefined
}

/**
 * configuration for an existing application
 */
export interface Application {
  name: string;
  url: string;
  title: string;
}
