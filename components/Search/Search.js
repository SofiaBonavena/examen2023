import React from 'react';
import styles from './Search.module.css';
import { Formik } from 'formik';
import { useAppContext } from '../../contexts/AppContext'; // 1. Importé useAppContext

const Search = () => {
  const { showsData, handleGetShows, loading } = useAppContext();

  return (
    <section>
      <h2>Search shows</h2>
      <div className={styles.form_container}>
        <Formik
          initialValues={{ show: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.show) {
              errors.show = 'Required';
            }
            return errors;
          }}
          onSubmit={(values) => {
            handleGetShows(values.show); // 2. llamé a la funcion handleGetShows
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="show"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.show}
              />
              <div className={styles.error}>
                {errors.show && touched.show && errors.show}
              </div>
              <button type="submit">Search</button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Search;
