/**
 * Internal dependencies.
 */


const selectors = {
    getJobs(state) {
        const { jobs } = state;

        return jobs;
    },

    getJobDetail(state) {
        const { job } = state;

        return job;
    },

    getJobTypes(state) {
        const { jobTypes } = state;

        return jobTypes;
    },

    getJobsSaving(state) {
        const { jobsSaving } = state;

        return jobsSaving;
    },

    getJobsDeleting(state) {
        const { jobsDeleting } = state;

        return jobsDeleting;
    },

    getLoadingJobs(state) {
        const { loadingJobs } = state;

        return loadingJobs;
    },

    getTotalPage(state) {
        const { totalPage } = state;

        return totalPage;
    },

    getTotal(state) {
        const { total } = state;

        return total;
    },

    getFilter(state) {
        const { filters } = state;

        return filters;
    },

    getForm(state) {
        const { form } = state;

        return form;
    },

    getCompaniesDropdown(state) {
        const { companyDropdowns } = state;

        return companyDropdowns;
    },
};

export default selectors;
