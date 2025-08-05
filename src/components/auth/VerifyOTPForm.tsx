import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { OTPFormSchema } from "@/utils/validations";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const VerifyOTPForm = () => {
  const form = useForm<z.infer<typeof OTPFormSchema>>({
    resolver: zodResolver(OTPFormSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(data: z.infer<typeof OTPFormSchema>) {
    console.log(data);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputOTP maxLength={4} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot
                      className="text-2xl w-[50px] h-[50px] text-[24px] text-[#5B6871]"
                      index={0}
                    />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot
                      className="text-2xl w-[50px] h-[50px] text-[24px] text-[#5B6871]"
                      index={1}
                    />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot
                      className="text-2xl w-[50px] h-[50px] text-[24px] text-[#5B6871]"
                      index={2}
                    />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot
                      className="text-2xl w-[50px] h-[50px] text-[24px] text-[#5B6871]"
                      index={3}
                    />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-[160px] rounded-[6px] transition-all duration-300 bg-secondary hover:bg-blue-500 text-white"
          type="submit"
        >
          Confirm Code
        </Button>
      </form>
    </Form>
  );
};

export default VerifyOTPForm;
