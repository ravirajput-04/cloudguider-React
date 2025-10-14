import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ContactFormValues {
  name: string;
  number: string;
  email: string;
  subject: string;
  message: string;
}

// Validation schema
const schema = yup
  .object({
    name: yup
      .string()
      .required("Name is required")
      .matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces")
      .test(
        "min-letters",
        "Name must have at least 3 letters",
        (value) => (value?.replace(/[^A-Za-z]/g, "").length ?? 0) >= 3
      )
      .max(50, "Name cannot exceed 50 characters"),

    number: yup
      .string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),

    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),

    subject: yup
      .string()
      .required("Subject is required")
      .test(
        "min-words",
        "Subject must have at least 5 words",
        (value) => (value?.trim().split(/\s+/).length ?? 0) >= 2
      )
      .max(100, "Subject cannot exceed 100 characters"),

    message: yup
      .string()
      .required("Message is required")
      .test(
        "min-words",
        "Message must contain at least 20 words",
        (value) => (value?.trim().split(/\s+/).length ?? 0) >= 5
      )
      .max(1000, "Message cannot exceed 1000 characters"),
  })
  .required();

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<ContactFormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onBlur",
  });

  // Watch subject and message for live counters
  const subjectValue = watch("subject") || "";
  const messageValue = watch("message") || "";

  const getWordCount = (text: string) =>
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast.success("✅ Your message has been sent successfully!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });

      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("❌ Something went wrong. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  return (
    <>
        <div className="contact-form-s1">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name*"
              {...register("name")}
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
            />
            {errors.name && (
              <p className="form-error text-danger mt-1">{errors.name.message}</p>
            )}

            {/* Phone */}
            <input
              type="text"
              placeholder="Phone Number*"
              {...register("number")}
              className={`form-control ${errors.number ? "is-invalid" : ""}`}
            />
            {errors.number && (
              <p className="form-error text-danger mt-1">{errors.number.message}</p>
            )}

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email*"
              {...register("email")}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
            {errors.email && (
              <p className="form-error text-danger mt-1">{errors.email.message}</p>
            )}

            {/* Subject */}
            <input
              type="text"
              placeholder="Your Subject*"
              {...register("subject")}
              className={`form-control ${errors.subject ? "is-invalid" : ""}`}
            />
            <div className="d-flex justify-content-between mt-1">
              {errors.subject && (
                <p className="form-error text-danger">{errors.subject.message}</p>
              )}
              <small className="text-muted">{getWordCount(subjectValue)} words</small>
            </div>

            {/* Message */}
            <textarea
              cols={30}
              rows={6}
              placeholder="Message here..."
              {...register("message")}
              className={`form-control ${errors.message ? "is-invalid" : ""}`}
            />
            <div className="d-flex justify-content-between mt-1">
              {errors.message && (
                <p className="form-error text-danger">{errors.message.message}</p>
              )}
              <small className="text-muted">{getWordCount(messageValue)} words</small>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="btn btn-primary mt-3"
              style={{
                opacity: isSubmitting || !isValid ? 0.6 : 1,
                cursor: isSubmitting || !isValid ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default ContactForm;
