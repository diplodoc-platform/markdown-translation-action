/// <reference types="node" />
import { URL } from 'url';
import { IGitSourceSettings } from './git-source-settings';
export declare function getFetchUrl(settings: IGitSourceSettings): string;
export declare function getServerUrl(url?: string): URL;
export declare function getServerApiUrl(url?: string): string;
export declare function isGhes(url?: string): boolean;
