import type { Writable } from 'svelte/store'
import type ScriptEditorDrawer from './content/ScriptEditorDrawer.svelte'
import type { Schedule } from './scheduleUtils'

export type FlowEditorContext = {
	selectedId: Writable<string>
	schedule: Writable<Schedule>,
	previewArgs: Writable<Record<string, any>>,
	scriptEditorDrawer: Writable<ScriptEditorDrawer | undefined>
}
