"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import React from "react";
import {
  CountryCode,
  getCountryCallingCode,
  parsePhoneNumberFromString,
} from "libphonenumber-js";
import Swal from "sweetalert2";
import { CountryCodes } from "@/utils/CountryCodes";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "@/redux/apiCalls/authApiCall";
import { toast } from "react-toastify/unstyled";

interface RegisterFormProps {
  isRTL: boolean;
}



const RegisterForm = ({ isRTL }: RegisterFormProps) => {
  const t = useTranslations("register");
  const dispatch: any = useDispatch();
  const { registerMessage } = useSelector((state) => state.auth);
  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: {
      phoneCode: "",
      countryCode: "",
      localNumber: "",
      fullNumber: "",
    },
    dateOfBirth: "",
    gender: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  // __define-ocg__
  const handleCountryCodeChange = (isoCode: string) => {
    const country = CountryCodes.find((c) => c.code === isoCode);

    const phoneCode =
      country?.phoneCode ?? "+" + getCountryCallingCode(isoCode as CountryCode);

    setFormData((prev) => ({
      ...prev,
      phoneNumber: {
        ...prev.phoneNumber,
        countryCode: isoCode, 
        phoneCode, 
        fullNumber: "",
      },
    }));
  };

  const handlePhoneChange = (inputValue: string) => {
  setFormData((prev) => {
    const phone = prev.phoneNumber;
    const isoCode = phone.countryCode as CountryCode;
    let local = inputValue.replace(/\s+/g, ""); 
    let fullNumber = "";

    
    const phoneCode = phone.phoneCode || (isoCode ? "+" + getCountryCallingCode(isoCode) : "");


    
    if (local.startsWith("0")) {
      local = local.slice(1);
    }

    
    fullNumber = `${phoneCode}${local}`;

    const parsed = parsePhoneNumberFromString(fullNumber, isoCode);

    if (parsed && parsed.isValid()) {
      
      return {
        ...prev,
        phoneNumber: {
          ...phone,
          localNumber: parsed.nationalNumber,
          fullNumber: parsed.number, 
        },
      };
    } else {
      
      return {
        ...prev,
        phoneNumber: {
          ...phone,
          localNumber: inputValue,
          fullNumber,
        },
      };
    }
  });
};


  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  if (formData.firstName.trim() === "") return toast.error("First name cannot be empty");
  if (formData.lastName.trim() === "") return toast.error("Last name cannot be empty");
  if (formData.email.trim() === "") return toast.error("Email cannot be empty");
  if (formData.password.trim() === "") return toast.error("Password cannot be empty");

  try {

    const formattedData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: {
        countryCode: formData.phoneNumber.phoneCode,
        localNumber: formData.phoneNumber.localNumber,
        fullNumber: formData.phoneNumber.fullNumber,
      },
      dateOfBirth: formData.dateOfBirth,
      gender: formData.gender,
      password: formData.password,
    };

    console.log("Sending to backend:", formattedData);

    dispatch(registerUser(formattedData));

  } catch (error) {
    toast.error("An error occurred during registration. Please try again. ");
  } finally {
    setIsLoading(false);
  }
};

// First useEffect: Check if registerMessage is not null
  useEffect(() => {
    if (registerMessage) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: registerMessage,
        showConfirmButton: true, // Confirmation button will be shown
      }).then((result: any) => {
        if (result.isConfirmed) {
          router.push("/login");
        }
      });
    }
  }, [registerMessage, router]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t("firstName")}
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="Jhon"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            required
            className="w-full px-3 py-3 border border-gray-500 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="lastName"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t("lastName")}
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Doe"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            required
            className="w-full px-3 py-3 border border-gray-500 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {t("emailAddress")}
        </label>
        <input
          id="email"
          type="email"
          placeholder="jhon.doe@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full px-3 py-3 border border-gray-500 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      {/* Phone Number */}
      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {t("phoneNumber")}
        </label>
        <div
          className={`flex gap-2 ${isRTL ? "flex-row-reverse" : "flex-row"}`}
        >
          <select
            value={formData.phoneNumber.countryCode}
            onChange={(e) =>{
               console.log("Selected country:", e.target.value);
               handleCountryCodeChange(e.target.value)}}
            className={`px-3 py-3 border border-gray-500 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 w-32 ${
              isRTL ? "text-right" : "text-left"
            }`}
            dir={isRTL ? "rtl" : "ltr"}
          >
            {CountryCodes.map((country) => (
              <option key={country.code} value={country.code}>
                {isRTL
                  ? `${country.phoneCode} ${country.flagEmoji} ${country.name}`
                  : `${country.name} ${country.flagEmoji} ${country.phoneCode}`}
              </option>
            ))}
          </select>
          <input
            id="phone"
            type="tel"
            placeholder="123456789"
            value={formData.phoneNumber.localNumber}
            onChange={(e) => handlePhoneChange(e.target.value)}
            required
            className={`flex-1 px-3 py-3 border border-gray-500 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 w-full ${
              isRTL ? "text-right" : "text-left"
            }`}
            dir={isRTL ? "rtl" : "ltr"}
          />
        </div>
      </div>

      {/* Date of Birth and Gender */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label
            htmlFor="dateOfBirth"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t("dateOfBirth")}
          </label>
          <input
            id="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            placeholder="YYYY-MM-DD"
            onChange={(e) =>
              setFormData({ ...formData, dateOfBirth: e.target.value })
            }
            required
            className="w-full px-3 py-3 border border-gray-500 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="gender"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t("gender")}
          </label>
          <select
            id="gender"
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
            required
            className="w-full px-3 py-3 border border-gray-500 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
          >
            <option value="" disabled hidden>
              {t("selectGender")}
            </option>
            <option value="male">{t("male")}</option>
            <option value="female">{t("female")}</option>
            <option value="other">{t("other")}</option>
            <option value="prefer-not-to-say">{t("preferNotToSay")}</option>
          </select>
        </div>
      </div>

      {/* Password */}
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {t("password")}
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder={t("createStrongPassword")}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
            className={`w-full px-3 py-3 border border-gray-500 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 ${
              isRTL ? "pl-12 pr-3" : "pr-12 pl-3"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 ${
              isRTL ? "left-3 right-auto" : "right-3 left-auto"
            }`}
          >
            {showPassword ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div className="space-y-2">
        <label
          htmlFor="confirmPassword"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {t("confirmPassword")}
        </label>
        <div className="relative">
          <input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder={t("confirmYourPassword")}
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            required
            className={`w-full px-3 py-3 border border-gray-500 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 ${
              isRTL ? "pl-12 pr-3" : "pr-12 pl-3"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 ${
              isRTL ? "left-3 right-auto" : "right-3 left-auto"
            }`}
          >
            {showConfirmPassword ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-center space-x-2">
        <input
          id="terms"
          type="checkbox"
          checked={formData.agreeToTerms}
          onChange={(e) =>
            setFormData({ ...formData, agreeToTerms: e.target.checked })
          }
          required
          className="w-4 h-4 rounded border-gray-500 focus:ring-2 focus:ring-orange-500 text-orange-500"
        />
        <label
          htmlFor="terms"
          className="text-sm text-gray-600 dark:text-gray-400"
        >
          {t("agreeToTerms")}{" "}
          <Link
            href="/terms"
            className="font-medium hover:underline"
            style={{ color: "var(--mushrif-orange)" }}
          >
            {t("termsOfService")}
          </Link>{" "}
          {t("and")}{" "}
          <Link
            href="/privacy"
            className="font-medium hover:underline"
            style={{ color: "var(--mushrif-orange)" }}
          >
            {t("privacyPolicy")}
          </Link>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:opacity-90 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        style={{
          background:
            "linear-gradient(to right, var(--mushrif-orange), var(--mushrif-red))",
        }}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            {t("creatingAccount")}
          </div>
        ) : (
          t("createAccount")
        )}
      </button>
    </form>
  );
};

export default RegisterForm;
