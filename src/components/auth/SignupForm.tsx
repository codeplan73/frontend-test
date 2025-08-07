import { useState } from "react";
import { signUpFormSchema } from "@/utils/validations";
import { Input } from "@/components/ui/input";
import { IoMdMail } from "react-icons/io";
import { BsInfoCircleFill } from "react-icons/bs";
import { RiUser3Fill } from "react-icons/ri";
import { FaUnlockAlt } from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
// import { useDispatch } from "react-redux";
// import { useRegisterMutation } from "@/store/features/auth/authApiSlice";

const SignupForm = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const [register, { isLoading }] = useRegisterMutation();

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signUpFormSchema>) => {
    console.log(values);
    // navigate("/email-confirmation", { state: { email: values.email } });
    try {
      // const response = await register(values).unwrap();
      // console.log("Registration response:", response);
      navigate("/verify-otp", { state: { email: values.email } });

      // if (response.success) {
      //   navigate("/auth/verify-otp", { state: { email: values.email } });
      // } else {
      //   // Handle error response
      //   console.error("Registration failed:", response.message);
      // }
    } catch (error) {
      console.error("Registration error:", error);
    }
    form.reset();
    setActive(false);
    // dispatch({ type: "auth/reset" });
    // navigate("/auth/login");
    console.log("Form submitted successfully");
  };

  return (
    <Form {...form}>
      <form
        onClick={() => setActive(true)}
        onSubmit={form.handleSubmit(onSubmit)}
        className={`transition-all duration-300 ${
          active ? "space-y-6" : "space-y-3"
        }`}
      >
        <div className="flex transition-all duration-300 space-x-4">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem className="transition-all duration-300">
                <FormLabel
                  className={`text-[#5B6871] transition-opacity duration-300 ${
                    active ? "block" : "hidden"
                  }`}
                >
                  First Name
                </FormLabel>
                <div className="relative">
                  <RiUser3Fill className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#B0BABF]" />
                  <FormControl>
                    <Input
                      // disabled={isLoading}
                      placeholder="First Name"
                      {...field}
                      className={`rounded-[6px] pl-10 transition-colors duration-200 focus-visible:ring focus-visible:ring-secondary focus-visible:border-secondary focus-visible:outline-none ${
                        field.value
                          ? "border-secondary border-2"
                          : "border-input"
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
            name="last_name"
            render={({ field }) => (
              <FormItem className="transition-all duration-300">
                <FormLabel
                  className={`text-[#5B6871] transition-opacity duration-300 ${
                    active ? "block" : "hidden"
                  }`}
                >
                  Last Name
                </FormLabel>
                <div className="relative">
                  <RiUser3Fill className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#B0BABF]" />
                  <FormControl>
                    <Input
                      // disabled={isLoading}
                      placeholder="Last Name"
                      {...field}
                      className={`rounded-[6px] pl-10 transition-colors duration-200 focus-visible:ring focus-visible:ring-secondary focus-visible:border-secondary focus-visible:outline-none ${
                        field.value
                          ? "border-secondary border-2"
                          : "border-input"
                      }`}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="transition-all duration-300">
              <FormLabel
                className={`text-[#5B6871] transition-opacity duration-300 ${
                  active ? "flex" : "hidden"
                }`}
              >
                <span>Email</span>
                <BsInfoCircleFill className="text-[#5B6871] text-sm" />
              </FormLabel>
              <div className="relative">
                <IoMdMail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#B0BABF]" />
                <FormControl>
                  <Input
                    // disabled={isLoading}
                    placeholder="Work email"
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
                    // disabled={isLoading}
                    type="password"
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
          // disabled={!active || isLoading}
          className={`w-full rounded-[6px] transition-all duration-300 ${
            !active
              ? "bg-[#ECEDED] text-slate-400 cursor-not-allowed"
              : "bg-secondary hover:bg-blue-500 text-white"
          }`}
          type="submit"
        >
          Create account
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
