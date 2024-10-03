import { type Toast, type Renderable, type DefaultToastOptions, type ToastOptions, type ValueOrFunction } from './types';
type Message<T extends Record<string, any> = Record<string, any>> = Renderable<T>;
type ToastHandler = <T extends Record<string, any> = Record<string, any>>(message: Message<T>, options?: ToastOptions<T>) => string;
declare const toast: {
    <T extends Record<string, any> = Record<string, any>>(message: Message<T>, opts?: Partial<Pick<Toast<T>, "id" | "icon" | "duration" | "ariaProps" | "className" | "style" | "position" | "iconTheme" | "props">> | undefined): string;
    error: ToastHandler;
    success: ToastHandler;
    loading: ToastHandler;
    custom: ToastHandler;
    dismiss(toastId?: string): void;
    remove(toastId?: string): void;
    promise<T_1>(promise: Promise<T_1>, msgs: {
        loading: Renderable;
        success: ValueOrFunction<Renderable, T_1>;
        error: ValueOrFunction<Renderable, any>;
    }, opts?: DefaultToastOptions): Promise<T_1>;
};
export default toast;
