import { useState } from "react";
import { Input } from "@/components/ui/input";
import { IoMdMail } from "react-icons/io";
import { FaUnlockAlt } from "react-icons/fa";
import { loginFormSchema } from "@/utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    console.log(values);
    navigate("/dashboard", { state: { email: values.email } });
  }

  return (
    <Form {...form}>
      <form
        onClick={() => setActive(true)}
        onSubmit={form.handleSubmit(onSubmit)}
        className={`transition-all duration-300 ${
          active ? "space-y-6" : "space-y-4"
        }`}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="transition-all duration-300">
              <FormLabel
                className={`text-[#5B6871] transition-opacity duration-300 ${
                  active ? "block" : "hidden"
                }`}
              >
                Email
              </FormLabel>
              <div className="relative">
                <IoMdMail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#B0BABF]" />
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    className={`rounded-[6px] pl-10 transition-colors duration-200 focus-visible:ring focus-visible:ring-secondary focus-visible:border-secondary focus-visible:outline-none ${
                      field.value ? "border-secondary border-2" : "border-input"
                    }`}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="transition-all duration-300">
              <FormLabel
                className={`text-[#5B6871] transition-opacity duration-300 ${
                  active ? "block" : "hidden"
                }`}
              >
                Password
              </FormLabel>
              <div className="relative">
                <FaUnlockAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#B0BABF]" />
                <FormControl>
                  <Input
                    placeholder="Password"
                    {...field}
                    className={`rounded-[6px] pl-10 transition-colors duration-200 focus-visible:ring focus-visible:ring-secondary focus-visible:border-secondary focus-visible:outline-none ${
                      field.value ? "border-secondary border-2" : "border-input"
                    }`}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={!active}
          className={`w-full rounded-[6px] transition-all duration-300 ${
            !active
              ? "bg-[#ECEDED] text-slate-400 cursor-not-allowed"
              : "bg-secondary hover:bg-blue-500 text-white"
          }`}
          type="submit"
        >
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
