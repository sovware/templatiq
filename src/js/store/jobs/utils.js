/**
 * Internal dependencies.
 */

export const prepareJobDataForDatabase = (job) => {
    const data = {
        ...job,
        job_type_id: job.job_type.id,
        company_id: job.company.id,
    };

    if (job.is_active !== undefined) {
        data.is_active = job.is_active;
    } else {
        data.is_active = 1;
    }

    // Remove unnecessary data.
    delete data.company;
    delete data.job_type;
    delete data.status;
    delete data._links;

    return data;
};
