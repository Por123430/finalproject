import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const notesAdapter = createEntityAdapter({})

const initialState = notesAdapter.getInitialState()

export const notesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getnotes: builder.query({
            query: () => '/notes',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadednotes = responseData.map(note => {
                    note.id = note._id
                    return note
                });
                return notesAdapter.setAll(initialState, loadednotes)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Note', id: 'LIST'},
                        ...result.ids.map(id => ({ type: 'Note', id}))
                    ]
                } else return [{ type : 'Note' , id: 'LIST'}]
            }
        }),
    }),
})

export const {
    useGetNotesQuery,
} = notesApiSlice

export const selectNotesResult = notesApiSlice.endpoints.getnotes.select()

const selectNoteData = createSelector(
    selectNotesResult,
    notesResult => notesResult.data
)

export const {
    selectAll: selectAllNotes,
    selectById: selectNoteById,
    selectIds: selectNoteIds
} = notesAdapter.getSelectors(state => selectNoteData(state) ??
initialState)