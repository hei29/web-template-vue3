import mitt from 'mitt';

export const emitter = mitt();

export enum EditorEvent {
    // 测试log event
    GlobalTestLog = 'GlobalTestLog'
}

export const SendTestLog = (text: string) => {
    emitter.emit(EditorEvent.GlobalTestLog, {
        text
    })
}