import { gql, useMutation } from "@apollo/client";
import React from "react";
import { QuizTextarea, QuizTextField } from "../../components/pure";
import { useAuth } from "../../context/AuthUserContext";

const INSERT_QUIZ = gql`
    mutation InsertQuiz($title: String, $description: String, $full_page: String, $created_by: String) {
      item: insert_quiz(objects: {title: $title, description: $description, full_page: $full_page, created_by: $created_by}) {
        affected_rows
        returning {
          id
          title
          description
          full_page
          format_parser
          created_by
          created_at
          updated_at
          deleted_at
        }
      }
    }
`;

export default function Quiz() {
  const [insertQuiz, { data, loading, error }] = useMutation(INSERT_QUIZ);
  const { user } = useAuth()

  const onSubmit = (event: any) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget)
    const title = form.get('title');
    const description = form.get('description');
    const payload = {
      title: title,
      description: description,
      full_page: '',
      created_by: user?.uid,
    };
    insertQuiz({ variables: payload });
  }

  return (
    <div className="md:container mx-auto p-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Create Quiz
        </h5>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Create Quiz to be available globally
        </p>
        <QuizTextField
          label="Quiz Title"
          name="title"
          placeholder="Quiz Title"
        />
        <QuizTextarea
          label="Quiz Description"
          name="description"
          placeholder="Quiz Description"
        />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Quiz
        </button>
      </form>

    </div >
  )
}
