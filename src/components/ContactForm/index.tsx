"use client";

import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactFormSchema, ContactFormSchema } from "@/validation/schema/ContactFormSchema";
import { createContact } from "@/action/contact";
import ErrorMessage from "./ErrorMessage";
import Button from "../Button";
import Input from "./Input";
import TextArea from "./TextArea";
import Success from "./Success";
import Loading from "../Loading";

const ContactForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isLoading,
            isSubmitting,
            isSubmitSuccessful,
        },
        setError,
        reset,
    } = useForm<ContactFormSchema>(
        {
            mode: "onSubmit",
            resolver: zodResolver(contactFormSchema),
        }
    );

    const onSubmit: SubmitHandler<ContactFormSchema> = async (data) => {
        const result = await createContact({status: "pending", message: ""}, data);
        if (result.status === "error") {
            setError("root", {
                type: "server",
                message: result.message,
            });
        }
        else {
            reset();
        }
    };

    return (
        isSubmitSuccessful
        ? (
            <Success />
        ) : (
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={clsx(
                    "mx-auto mb-2 w-80 h-fit rounded-lg p-5 bg-zinc-100/75 dark:bg-zinc-900/75",
                    "shadow-lg shadow-slate-800/20 dark:shadow-slate-100/20",
                    "sm:w-96 md:w-[30rem]",
                )}
            >
                <div className="flex flex-col gap-4">
                    <div className="w-full flex gap-1 flex-col sm:flex-row sm:gap-3">
                        <Input register={register("firstName")} fieldError={errors.firstName} />
                        <Input register={register("lastName")} fieldError={errors.lastName} />
                    </div>
                    <Input register={register("email")} fieldError={errors.email} />
                    <TextArea register={register("message")} fieldError={errors.message} />
                    <Button type="submit" className="w-32 h-12 mx-auto mt-5 mb-3 before:translate-x-[4px] before:-translate-y-[4px]">
                        <div className="w-full h-full flex justify-center items-center">
                            {(isSubmitting || isLoading) ? (
                                <Loading />
                            ) : (
                                <span className="font-roboto text-xl text-slate-200">Submit</span>
                            )}
                        </div>
                    </Button>
                </div>
                <ErrorMessage message={
                    errors.root?.message ? errors.root.message : null
                }/>
            </form>
        )
    );
};

export default ContactForm;
