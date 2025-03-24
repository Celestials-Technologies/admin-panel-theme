'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const ProfileSettings = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      companyName: '',
      domain: '',
      message: '',
      file: null,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid Email').required('Required'),
      dob: Yup.string().required('Required'),
      companyName: Yup.string().required('Required'),
      domain: Yup.string().required('Required'),
      message: Yup.string().required('Required'),
      file: Yup.mixed().nullable().required('A file is required'),
    }),
    onSubmit: (values) => {
      // handle form submission
      console.log('Form values:', values);
    },
  });

  return (
    <>
      <div className="md:px-6 px-3 pt-7 bg-f6f7f9 font-inter pb-44">
        <div className="md:px-1.5">
          <div className="flex justify-between items-center mb-7">
            <h2 className="text-xl font-gilroyBold leading-5 text-424242">Personal Information</h2>
            <div className="flex items-center">
              <button
                type="button"
                onClick={formik.handleReset}
                className="flex items-center text-[13px] font-medium leading-5 text-616161 py-2 mr-7"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => formik.handleSubmit()}
                className="flex items-center text-[13px] font-medium leading-5 text-white rounded bg-ryeo-blue px-4 py-2.5"
              >
                Save
              </button>
            </div>
          </div>
          <div className="bg-white sm:pt-6 sm:pb-8 py-4 sm:px-7 px-3 rounded-lg boxShadow">
            <form className="flex" onSubmit={formik.handleSubmit}>
              <div className="w-6/12 pr-4">
                <div>
                  <p className="text-xs font-semibold leading-3 tracking-wide uppercase text-9e9e9e mb-3">First Name</p>
                  <input
                    className="border border-9e9e9e h-11 p-4 text-[13px] font-medium leading-3 text-616161 rounded w-full"
                    type="text"
                    name="firstName"
                    placeholder="Daniel"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <div className="text-sm text-red-500">{formik.errors.firstName}</div>
                  )}
                </div>
                <div className="mt-8">
                  <p className="text-xs font-semibold leading-3 tracking-wide uppercase text-9e9e9e mb-3">Email Address</p>
                  <input
                    className="border border-9e9e9e h-11 p-4 text-[13px] font-medium leading-3 text-616161 rounded w-full"
                    type="email"
                    name="email"
                    placeholder="daniel.rist@gmail.com"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-sm text-red-500">{formik.errors.email}</div>
                  )}
                </div>
              </div>
              <div className="w-6/12 pl-2">
                <div>
                  <p className="text-xs font-semibold leading-3 tracking-wide uppercase text-9e9e9e mb-3">Last Name</p>
                  <input
                    className="border border-9e9e9e h-11 p-4 text-[13px] font-medium leading-3 text-616161 rounded w-full"
                    type="text"
                    name="lastName"
                    placeholder="Rist"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <div className="text-sm text-red-500">{formik.errors.lastName}</div>
                  )}
                </div>
                <div className="mt-8">
                  <p className="text-xs font-semibold leading-3 tracking-wide uppercase text-9e9e9e mb-3">Profile Picture</p>
                  <div className="flex items-center">
                    <span className="w-9 h-9 mr-2.5 rounded-full">
                      <img className="w-full h-full" src="images/profile.png" alt="Profile" />
                    </span>
                    <input
                      type="file"
                      name="file"
                      onChange={(event) => {
                        const file = event.currentTarget.files?.[0] || null;
                        formik.setFieldValue('file', file);
                      }}
                      className="text-[13px] font-medium leading-4 text-ryzeoBlue"
                    />
                    {formik.touched.file && formik.errors.file && (
                      <div className="text-sm text-red-500">{formik.errors.file}</div>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="flex justify-between items-center mb-7 mt-14 pt-1">
            <h2 className="text-xl font-gilroyBold leading-5 text-424242">Account Security</h2>
            <div className="flex items-center">
              <button className="flex items-center text-[13px] font-medium leading-5 text-616161 py-2 mr-7">
                Cancel
              </button>
              <button className="flex items-center text-[13px] font-medium leading-5 text-white rounded ryeo-blue-bg px-4 py-2.5">
                Save
              </button>
            </div>
          </div>
          <div className="bg-white sm:pt-6 sm:pb-8 py-4 sm:px-7 px-3 rounded-lg boxShadow">
            <div className="sm:flex">
              <div className="sm:w-6/12 w-full md:pr-5 pr-2">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-semibold leading-4 text-616161 mb-2">Two -factor Authentication</p>
                    <p className="text-xs font-medium leading-4 text-9e9e9e">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div>
                    <button type="button" className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false">
                      <span className="sr-only">Use setting</span>
                      <span aria-hidden="true" className="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
                    </button>
                  </div>
                </div>
                <div className="flex justify-between mt-8">
                  <div>
                    <p className="text-sm font-semibold leading-4 text-616161 mb-2">Two -factor Authentication</p>
                    <p className="text-xs font-medium leading-4 text-9e9e9e">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div>
                    <button type="button" className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false">
                      <span className="sr-only">Use setting</span>
                      <span aria-hidden="true" className="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="sm:w-6/12 w-full sm:mt-0 mt-7 md:pl-5 pr-2">
                <div>
                  <p className="text-xs font-semibold leading-3 tracking-wide uppercase text-9e9e9e mb-3">Enter Current password</p>
                  <input className="border border-9e9e9e h-11 p-4 text-[13px] font-medium leading-3 text-616161 rounded w-full" type="password" name="password"/>
                </div>
                <div className="mt-8">
                  <p className="text-xs font-semibold leading-3 tracking-wide uppercase text-9e9e9e mb-3">enter new password</p>
                  <input className="border border-9e9e9e h-11 p-4 text-[13px] font-medium leading-3 text-616161 rounded w-full" type="password" name="password"/>
                </div>
                <div className="mt-8">
                  <p className="text-xs font-semibold leading-3 tracking-wide uppercase text-9e9e9e mb-3">enter new password</p>
                  <input className="border border-9e9e9e h-11 p-4 text-[13px] font-medium leading-3 text-616161 rounded w-full" type="password" name="password"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
