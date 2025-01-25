"use server";

import { ContactFormSchema } from "../schema/ContactFormSchema";

type Return = {
    status: "success" | "error";
    message: string;
}

export const createContact = async (
    _prevState: unknown,
    formData: ContactFormSchema
): Promise<Return> => {
    const result = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fields: [
                    {
                        objectTypeId: "0-1",
                        name: "firstname",
                        value: formData.firstName,
                    },
                    {
                        objectTypeId: "0-1",
                        name: "lastname",
                        value: formData.lastName,
                    },
                    {
                        objectTypeId: "0-1",
                        name: "email",
                        value: formData.email,
                    },
                    {
                        objectTypeId: "0-1",
                        name: "message",
                        value: formData.message,
                    },
                ],
            }),
        }
    )

    try {
        await result.json();
    } catch (error) {
        return {
            status: "error",
            message: "お問い合わせの送信に失敗しました",
        }
    }
    return {
        status: "success",
        message: "お問い合わせが完了しました",
    }
};
