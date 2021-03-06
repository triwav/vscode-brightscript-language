import {
    CompletionItem,
    CompletionItemKind,
    MarkdownString,
    SnippetString
} from 'vscode';

export const ifMicrophoneCompletionItems: CompletionItem[] = [
    {
        kind: CompletionItemKind.Method,
        label: 'CanRecord',
        insertText: new SnippetString('CanRecord()'),
        documentation: new MarkdownString(
`
    CanRecord() as Boolean

Returns true if the platform and paired remote control can be requested to open the microphone.
`
        )
    },
    {
        kind: CompletionItemKind.Method,
        label: 'SetPrompt',
        insertText: new SnippetString('SetPrompt(${1:prompt as String})'),
        documentation: new MarkdownString(
`
    SetPrompt(prompt as String) as Void

Optionally set a short prompt string to be displayed to the user in the system microphone UI.
`
        )
    },
    {
        kind: CompletionItemKind.Method,
        label: 'RecordToFile',
        insertText: new SnippetString('RecordToFile(${1:wavFilePath as String})'),
        documentation: new MarkdownString(
`
    RecordToFile(wavFilePath as String) as Boolean

Open the microphone and record to create a WAV file at the specified output file path. Only tmp:/ paths are supported.

Returns true if the recording was performed and saved successfully.
`
        )
    },
    {
        kind: CompletionItemKind.Method,
        label: 'StartRecording',
        insertText: new SnippetString('StartRecording()'),
        documentation: new MarkdownString(
`
    StartRecording() as Boolean

Open the microphone and begin streaming microphone events to the app. The app must have called SetMessagePort previously.

Returns true if the microphone was opened successfully.

While the microphone is open, RecordingInfo events will be sent periodically with audio data.
When the microphone is closed, a RecordingDone event will be sent. See roMicrophoneEvent for detailed information.
`
        )
    },
    {
        kind: CompletionItemKind.Method,
        label: 'StopRecording',
        insertText: new SnippetString('StopRecording()'),
        documentation: new MarkdownString(
`
    StopRecording() as Boolean

If the microphone was previously opened via StartRecording() and the application decides to cancel the current recording prematurely,
(e.g. due to duration limit reached or an application error), this function can be called to stop recording and close the microphone.

Returns true if the microphone was open and successfully closed by the call.
`
        )
    }
];
