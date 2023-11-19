/**
 * Internal dependencies.
 */

import { jobsEndpoint } from './endpoint';
import * as Types from './types';
import { jobDefaultFormData } from './default-state';

const actions = {
    setJobs(job) {
        return {
            type: Types.GET_JOBS,
            jobs,
        };
    },

    setJobDetail(job) {
        return {
            type: Types.GET_JOB_DETAIL,
            job,
        };
    },

    setCompanyDropdowns(companyDropdowns) {
        return {
            type: Types.GET_COMPANIES_DROPDOWN,
            companyDropdowns,
        };
    },

    setJobTypes(jobTypes) {
        return {
            type: Types.GET_JOB_TYPES,
            jobTypes,
        };
    },

    setFormData(form) {
        return {
            type: Types.SET_JOB_FORM_DATA,
            form,
        };
    },

    setLoadingJobs(loadingJobs) {
        return {
            type: Types.SET_LOADING_JOBS,
            loadingJobs,
        };
    },

    setSavingJobs(jobsSaving) {
        return {
            type: Types.SET_JOBS_SAVING,
            jobsSaving,
        };
    },

    setDeletingJobs(jobsDeleting) {
        return {
            type: Types.SET_JOBS_DELETING,
            jobsDeleting,
        };
    },

    *setFilters(filters = {}) {
        yield actions.setLoadingJobs(true);
        yield actions.setFilterObject(filters);

        const queryParam = new URLSearchParams(
            filters
        ).toString();

        const path = `${jobsEndpoint}?${queryParam}`;
        const response = yield actions.fetchFromAPIUnparsed(path);

        let totalPage = 0;
        let totalCount = 0;

        if (response.headers !== undefined) {
            totalPage = parseInt(response.headers.get('X-WP-TotalPages'));
            totalCount = parseInt(response.headers.get('X-WP-Total'));
        }

        yield actions.setTotalPage(totalPage);
        yield actions.setTotal(totalCount);
        yield actions.setJobs(response.data);
        return actions.setLoadingJobs(false);
    },

    setFilterObject(filters) {
        return {
            type: Types.SET_JOBS_FILTER,
            filters,
        };
    },

    *saveJob(payload) {
        yield actions.setSavingJobs(true);

        try {
            let response = {};
            if (payload.id > 0) {
                response = yield {
                    type: Types.UPDATE_JOBS,
                    payload,
                };
            } else {
                response = yield {
                    type: Types.CREATE_JOBS,
                    payload,
                };
            }

            if (response?.id > 0) {
                yield actions.setFormData({ ...jobDefaultFormData });
                yield actions.setSavingJobs(false);
            }
        } catch (error) {
            yield actions.setSavingJobs(false);
        }
    },

    setTotalPage(totalPage) {
        return {
            type: Types.SET_TOTAL_JOBS_PAGE,
            totalPage,
        };
    },

    setTotal(total) {
        return {
            type: Types.SET_TOTAL_JOBS,
            total,
        };
    },

    fetchFromAPI(path) {
        return {
            type: Types.FETCH_FROM_API,
            path,
        };
    },

    fetchFromAPIUnparsed(path) {
        return {
            type: Types.FETCH_FROM_API_UNPARSED,
            path,
        };
    },

    *deleteJobs(payload) {
        yield actions.setDeletingJobs(true);

        try {
            const responseDeleteJobs = yield {
                type: Types.DELETE_JOBS,
                payload,
            };

            if (responseDeleteJobs?.total > 0) {
                yield actions.setFilters({});
            }

            yield actions.setDeletingJobs(false);
        } catch (error) {
            yield actions.setDeletingJobs(false);
        }
    },
};

export default actions;
