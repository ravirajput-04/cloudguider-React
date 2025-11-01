import React, { useEffect, useState } from "react";
import axios from "axios";
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
  source?: string;
}

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
        "Subject must have at least 2 words",
        (value) => (value?.trim().split(/\s+/).length ?? 0) >= 2
      )
      .max(100, "Subject cannot exceed 100 characters"),
    message: yup
      .string()
      .required("Message is required")
      .test(
        "min-words",
        "Message must contain at least 5 words",
        (value) => (value?.trim().split(/\s+/).length ?? 0) >= 5
      )
      .max(1000, "Message cannot exceed 1000 characters"),
  })
  .required();

const ContactForm: React.FC = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_CONTACT_FORM_URL;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<ContactFormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onBlur",
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setLoading(true);
      setStatusMessage("");
      const payload = { ...data, source: window.location.href };
      const response = await axios.post(API_URL, payload);
      if (response.status === 200 || response.status === 201) {
        toast.success("Your message has been sent successfully!", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });
        setStatusMessage("✅ Message sent successfully!");
        reset();
      } else {
        setStatusMessage("❌ Something went wrong. Please try again.");
        toast.warn("Something went wrong. Please try again.", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatusMessage("❌ Failed to send message. Try again later.");
      toast.error("Something went wrong. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => setStatusMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  return (
    <>
      <div className="contact-form-s1">
        <style>{`
          .form-control {
            color: black !important; /* ✅ Always black text */
          }
          .form-control.is-invalid {
            border-color: #ff4444;
            background-color: #ffe5e5;
            color: black !important; /* ✅ Text stays black even when invalid */
          }
          .form-error {
            color: white !important; /* ✅ Validation message white */
          }
        `}</style>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <input
            type="text"
            placeholder="Your Name*"
            {...register("name")}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          {errors.name && <p className="form-error">{errors.name.message}</p>}

          <input
            type="text"
            placeholder="Phone Number*"
            {...register("number")}
            className={`form-control ${errors.number ? "is-invalid" : ""}`}
          />
          {errors.number && <p className="form-error">{errors.number.message}</p>}

          <input
            type="email"
            placeholder="Your Email*"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}

          <input
            type="text"
            placeholder="Your Subject*"
            {...register("subject")}
            className={`form-control ${errors.subject ? "is-invalid" : ""}`}
          />
          {errors.subject && <p className="form-error">{errors.subject.message}</p>}

          <textarea
            cols={30}
            rows={6}
            placeholder="Message here..."
            {...register("message")}
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
          />
          {errors.message && <p className="form-error">{errors.message.message}</p>}

          <button
            type="submit"
            disabled={loading || isSubmitting || !isValid}
            className="btn btn-primary mt-3"
            style={{
              opacity: loading || isSubmitting || !isValid ? 0.6 : 1,
              cursor:
                loading || isSubmitting || !isValid ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {loading || isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>

        {statusMessage && (
          <div
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "8px 16px",
              borderRadius: "12px",
              color: "#fff",
              backgroundColor: statusMessage.includes("✅") ? "green" : "red",
              fontWeight: 500,
            }}
          >
            {statusMessage}
          </div>
        )}
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
