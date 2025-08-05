// import { useState } from "react";

// import { Input } from "@/components/ui/input";
// import { IoMdMail } from "react-icons/io";
// import { FaUnlockAlt } from "react-icons/fa";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";

// const formSchema = z.object({
//   email: z.string().min(2, {
//     message: "email must be at least 2 characters.",
//   }),
//   password: z.string().min(6, {
//     message: "Password must be at least 6 characters.",
//   }),
// });

// const LoginForm = () => {
//   const [active, setActive] = useState(false);
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   // 2. Define a submit handler.
//   function onSubmit(values: z.infer<typeof formSchema>) {
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     console.log(values);
//   }
//   return (
//     <Form {...form}>
//       <form
//         onClick={() => setActive(true)}
//         onSubmit={form.handleSubmit(onSubmit)}
//         className={`${
//           active ? "space-y-8" : "space-y-4"
//         } transition duration-200`}
//       >
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               {active && (
//                 <FormLabel className=" text-[#5B6871]  transition duration-200">
//                   Email
//                 </FormLabel>
//               )}
//               <div className="relative">
//                 <IoMdMail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#B0BABF]" />
//                 <FormControl>
//                   <Input
//                     placeholder="Email"
//                     {...field}
//                     className={`pl-10 focus-visible:ring focus-visible:ring-secondary focus-visible:border-secondary focus-visible:outline-none transition-colors duration-200 ${
//                       field.value ? "border-secondary border-2" : "border-input"
//                     }`}
//                   />
//                 </FormControl>
//               </div>

//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="password"
//           render={({ field }) => (
//             <FormItem>
//               {active && (
//                 <FormLabel className=" text-[#5B6871] transition duration-200">
//                   Password
//                 </FormLabel>
//               )}
//               <div className="relative">
//                 <FaUnlockAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#B0BABF]" />
//                 <FormControl>
//                   <Input
//                     placeholder="Password"
//                     className={`pl-10 focus-visible:ring focus-visible:ring-secondary focus-visible:border-secondary focus-visible:outline-none transition-colors duration-200 ${
//                       field.value ? "border-secondary border-2" : "border-input"
//                     }`}
//                     {...field}
//                   />
//                 </FormControl>
//               </div>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button
//           disabled={!active}
//           className={` w-full ${
//             !active
//               ? "bg-[#ECEDED] text-slate-400 cursor-not-allowed"
//               : " bg-secondary hover:bg-blue-500"
//           }`}
//           type="submit"
//         >
//           Login
//         </Button>
//       </form>
//     </Form>
//   );
// };

// export default LoginForm;

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { IoMdMail } from "react-icons/io";
import { FaUnlockAlt } from "react-icons/fa";

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

const formSchema = z.object({
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const LoginForm = () => {
  const [active, setActive] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onClick={() => setActive(true)}
        onSubmit={form.handleSubmit(onSubmit)}
        className={`transition-all duration-300 ${
          active ? "space-y-8" : "space-y-4"
        }`}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="transition-all duration-300">
              <FormLabel
                className={`text-[#5B6871] transition-opacity duration-300 ${
                  active ? "opacity-100" : "opacity-0"
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
                    className={`pl-10 transition-colors duration-200 focus-visible:ring focus-visible:ring-secondary focus-visible:border-secondary focus-visible:outline-none ${
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
                  active ? "opacity-100" : "opacity-0"
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
                    className={`pl-10 transition-colors duration-200 focus-visible:ring focus-visible:ring-secondary focus-visible:border-secondary focus-visible:outline-none ${
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
          className={`w-full transition-all duration-300 ${
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
