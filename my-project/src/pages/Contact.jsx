import React, { useState } from "react";
import { TextField, Button, CircularProgress } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import toast from "react-hot-toast";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });

  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("loading");

  try {
   const res = await axios.post(
  `${process.env.REACT_APP_API_URL}/contact`,
  formData
);

    if (res.data.success) {
      setStatus("success");

      toast.success("✅ Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        msg: "",
      });

      setTimeout(() => setStatus("idle"), 5000);
    }
  } catch (error) {
    console.error(error);
    setStatus("idle");

    toast.error("❌ Failed to send message");
  }
};

  const contactTiles = [
    {
      title: "Drop by",
      value: "Parel, Mumbai, MH",
      desc: "Visit our creative studio",
      icon: <MapPin size={20} />,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      title: "Voice",
      value: "+91 93650 55344",
      desc: "Mon-Fri · 9am - 6pm",
      icon: <Phone size={20} />,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Email",
      value: "support@ishisofttech.com",
      desc: "Response within 24 hours",
      icon: <Mail size={20} />,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] font-['Plus_Jakarta_Sans'] text-slate-900 overflow-x-hidden">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-28">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            Available for new projects
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Let’s build something <br />
            <span className="text-amber-600">extraordinary.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* LEFT SIDE */}
          <div className="lg:col-span-5 space-y-4">

            <div className="grid gap-4">
              {contactTiles.map((tile, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 sm:p-5 bg-white border border-slate-100 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-md hover:border-orange-200 transition"
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${tile.bg} ${tile.color} flex items-center justify-center`}
                  >
                    {tile.icon}
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                      {tile.title}
                    </h4>
                    <p className="font-bold text-slate-800 text-sm sm:text-base">
                      {tile.value}
                    </p>
                    <p className="text-xs text-slate-500">{tile.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* SOCIAL CARD */}
            <div className="p-5 sm:p-6 bg-slate-900 rounded-2xl sm:rounded-3xl text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                Connect with us
              </h3>

              <p className="text-slate-400 text-sm mb-4">
                Follow our journey on social media
              </p>

              <div className="flex gap-3">
                {[<Linkedin />, <Twitter />, <Instagram />].map((icon, i) => (
                  <button
                    key={i}
                    className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-orange-600 transition"
                  >
                    {React.cloneElement(icon, { size: 14 })}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[2rem] border border-slate-100 shadow-xl">

              <AnimatePresence mode="wait">

                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-5">
                      <CheckCircle2 size={34} />
                    </div>

                    <h3 className="text-xl font-black mb-2">Message Sent!</h3>
                    <p className="text-slate-500 text-sm">
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center text-white">
                        <Mail size={18} />
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold">
                        Send a Message
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <TextField
                        label="Full Name"
                        required
                        fullWidth
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        sx={inputStyles}
                      />

                      <TextField
                        label="Email Address"
                        required
                        type="email"
                        fullWidth
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        sx={inputStyles}
                      />
                    </div>

                    <TextField
                      label="Phone (Optional)"
                      className="!mb-4"
                      fullWidth
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      sx={inputStyles}
                    />

                    <TextField
                      label="Tell us about your project"
                      multiline
                      rows={4}
                      required
                      fullWidth
                      value={formData.msg}
                      onChange={(e) =>
                        setFormData({ ...formData, msg: e.target.value })
                      }
                      sx={inputStyles}
                      className="!mb-4"
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      disabled={status === "loading"}
                      className="!py-3 sm:!py-4 !bg-amber-700 !text-white !font-bold !rounded-xl sm:!rounded-2xl !capitalize !text-base sm:!text-lg"
                      endIcon={
                        status === "loading" ? (
                          <CircularProgress size={20} color="inherit" />
                        ) : (
                          <ArrowRight size={20} />
                        )
                      }
                    >
                      {status === "loading"
                        ? "Sending..."
                        : "Start Collaboration"}
                    </Button>
                  </form>
                )}

              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}

const inputStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "1rem",
    fontWeight: 600,
    "& fieldset": {
      borderColor: "#f1f5f9",
      borderWidth: "2px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ea580c",
    },
  },
  "& .MuiInputLabel-root": {
    fontWeight: 600,
    fontSize: "0.9rem",
  },
};

export default Contact;