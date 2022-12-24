
import React from "react";
interface TextareaProps {
  label: string,
  name?: string,
  placeholder?: string,
}
export default function QuizTextarea(props: TextareaProps) {
  const { label, placeholder, name } = props;
  return (
    <div className="mb-6">
      <label htmlFor="title"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" ></textarea>
    </div >
  )
}
