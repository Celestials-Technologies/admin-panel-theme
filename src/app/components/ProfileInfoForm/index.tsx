import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  companyName: string;
  domain: string;
  message: string;
  file?: File | null;
  onCancel: () => void;
}

interface ModalProps {
  onCancel: () => void;
}

const ProfileInfoForm = ({ onCancel }: ModalProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const savedData = localStorage.getItem('formData');
  const initialValues = savedData
    ? JSON.parse(savedData)
    : {
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        companyName: '',
        domain: '',
        message: '',
        file: null,
      };

  const formik = useFormik<FormData>({
    initialValues,
    onSubmit: (values) => {
      const dataToStore = {
        ...values,
        profileImage: previewUrl,
        timestamp: new Date().toISOString(),
      };

      try {
        localStorage.setItem('formData', JSON.stringify(dataToStore));
        onCancel();
        console.log('Form data saved to localStorage:', dataToStore);
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
    },
  });

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onCancel();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onCancel]);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    formik.setFieldValue('file', file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setPreviewUrl(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            ref={modalRef}
            className="relative w-[700px] overflow-hidden rounded-lg bg-white p-8 text-left shadow-xl transition-all sm:my-8"
          >
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    className="w-full rounded-md border p-2"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    className="w-full rounded-md border p-2"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="w-full rounded-md border p-2"
                  />
                </div>

                <div>
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>

                  <input
                    type="date"
                    name="dob"
                    onChange={formik.handleChange}
                    value={formik.values.dob}
                    className="w-full rounded-md border p-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>

                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    onChange={formik.handleChange}
                    value={formik.values.companyName}
                    className="w-full rounded-md border p-2"
                  />
                </div>

                <div>
                  <label htmlFor="domain" className="block text-sm font-medium text-gray-700">
                    Domain
                  </label>

                  <input
                    type="text"
                    name="domain"
                    placeholder="Domain"
                    onChange={formik.handleChange}
                    value={formik.values.domain}
                    className="w-full rounded-md border p-2"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  name="message"
                  placeholder="Message"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  className="w-full rounded-md border p-2"
                />
              </div>

              <div className="col-span-full">
                <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">
                  Profile photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <svg
                      className="mx-auto size-12 text-gray-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <div className="mt-4 flex text-sm/6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="focus-within:outline-hidden relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>

              {selectedFile && (
                <div className="mt-4">
                  <h3 className="font-bold">Selected File:</h3>
                  <p className="text-sm text-gray-600">{selectedFile.name}</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoForm;
