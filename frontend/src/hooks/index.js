import { useState, useCallback } from 'react';

/**
 * Custom hook for handling async operations with loading/error states
 * Enterprise-grade async state management
 */
export const useAsync = () => {
    const [state, setState] = useState({
        loading: false,
        error: null,
        data: null,
    });

    const execute = useCallback(async (asyncFunction) => {
        setState({ loading: true, error: null, data: null });

        try {
            const result = await asyncFunction();
            setState({ loading: false, error: null, data: result });
            return { success: true, data: result };
        } catch (error) {
            setState({ loading: false, error: error.message, data: null });
            return { success: false, error: error.message };
        }
    }, []);

    const reset = useCallback(() => {
        setState({ loading: false, error: null, data: null });
    }, []);

    return {
        ...state,
        execute,
        reset,
    };
};

/**
 * Custom hook for form handling
 */
export const useForm = (initialValues = {}) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    }, [errors]);

    const handleBlur = useCallback((e) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
    }, []);

    const reset = useCallback(() => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
    }, [initialValues]);

    const setFieldError = useCallback((field, message) => {
        setErrors(prev => ({ ...prev, [field]: message }));
    }, []);

    const setValidationErrors = useCallback((validationErrors) => {
        const errorMap = {};
        validationErrors.forEach(err => {
            errorMap[err.field] = err.message;
        });
        setErrors(errorMap);
    }, []);

    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        reset,
        setFieldError,
        setValidationErrors,
        setValues,
    };
};

export default { useAsync, useForm };
