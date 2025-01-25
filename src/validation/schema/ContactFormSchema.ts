import { z } from 'zod';

export const contactFormSchema = z.object({
    firstName: z
        .string()
        .min(1, {
            message: "名前を入力してください",
        }),
    lastName: z
        .string()
        .min(1, {
            message: "名字を入力してください",
        }),
    email: z.
        string()
        .min(1, {
            message: "メールアドレスを入力してください",
        })
        .email({
            message: "形式が正しくありません",
        }),
    message: z
        .string()
        .min(1, {
            message: "メッセージを入力してください",
        })
        .max(500, {
            message: "メッセージは500文字以内で入力してください",
        }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
