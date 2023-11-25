/**
 * Gets the organization ID of the running workflow or undefined if the value cannot be loaded from the GITHUB_EVENT_PATH
 */
export declare function getOrganizationId(): Promise<number | undefined>;
