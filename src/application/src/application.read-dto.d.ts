
export interface ApplicationReadDTO {
  readonly name?: string

  readonly data: unknown

  readonly uuid: string

  readonly osProcessId: number | undefined
}
