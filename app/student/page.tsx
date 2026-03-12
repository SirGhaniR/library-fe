"use client";

import { useFetchStudents } from "./-mutation";
import Loader from "@/components/Loader";
import { Edit, Trash } from "lucide-react";
import { StudentType } from "./type";

const Student = () => {
  const { data, isLoading } = useFetchStudents();

  return (
    <div className="text-center rounded-xl shadow py-4 space-py-4">
      <h1>Student List</h1>
      <table className="w-full text-sm border border-gray-200 rounded-lg ">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Classroom</th>
            <th>Major</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr className="hover:bg-gray-50">
              <td colSpan={5}>
                <Loader></Loader>
              </td>
            </tr>
          )}
          {data &&
            data?.data?.length > 0 &&
            data?.data?.map((d: StudentType, i: number) => (
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-left">{i + 1}</td>
                <td className="px-4 py-3 text-left">{d?.name}</td>
                <td className="px-4 py-3 text-left">{d?.classroom}</td>
                <td className="px-4 py-3 text-left">{d?.major}</td>
                <td className="px-4 py-3 text-left">
                  <button>
                    <Edit></Edit>
                  </button>
                  <button>
                    <Trash></Trash>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
