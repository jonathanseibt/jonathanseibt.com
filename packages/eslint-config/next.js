import { defineConfig } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import base, { app } from './base.js'

/** @type {import("eslint").Linter.Config[]} */
export default defineConfig([...base, ...nextVitals, ...nextTs, ...app])
