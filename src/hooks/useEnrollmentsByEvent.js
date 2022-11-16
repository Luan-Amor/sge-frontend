import { useState, useCallback } from "react";
import { EnrollService } from "../services/EnrollService";

export const useEnrollments = (id) => {

    const [enrollments, setEnrollments] = useState({}); 

    const getEnrollments = useCallback(async () => {

        const {status, data } = await EnrollService.enrollmentsByEvent(id);

        console.log('#data', data);

        if(status !== 200) throw new Error();

        setEnrollments(data)

    },[id])


    return {enrollments, getEnrollments}

} 