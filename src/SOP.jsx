import React from "react";
import  {useTranslation}  from "react-i18next";
import "./i18n"; // Import your i18n configuration
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const SOPSection = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
        
        <Link to="/">
        <button className="mt-20 ml-40">
        <FaArrowLeft className="text-3xl"/>
        </button>
        </Link>
    <div className="p-8 max-w-4xl mx-auto  rounded-lg shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-4xl font-extrabold text-gray-900">
          {t("sop.objective")}
        </h1>
        <select
          className="p-3 border  rounded-lg  shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 "
          value={i18n.language}
          onChange={handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="kn">ಕನ್ನಡ</option> {/* Kannada */}
          <option value="ml">മലയാളം</option> {/* Malayalam */}
          <option value="hi">हिन्दी</option> {/* Hindi */}
        </select>
      </div>

      <div className="mb-8 p-6  rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          {t("sop.approach.title")}
        </h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          {t("sop.approach.steps", { returnObjects: true }).map(
            (step, index) => (
              <li key={index} className="text-lg">
                {step}
              </li>
            )
          )}
        </ol>
      </div>

      <div className="mb-8 p-6  rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          {t("sop.bestPractices.title")}
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          {t("sop.bestPractices.items", { returnObjects: true }).map(
            (item, index) => (
              <li key={index} className="text-lg">
                {item}
              </li>
            )
          )}
        </ul>
      </div>

      <div className="mb-8 p-6  rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Contact Information
        </h2>
        <p className="text-gray-700 text-lg">{t("sop.contact")}</p>
      </div>
    </div>
    </div>
  );
};

export default SOPSection;