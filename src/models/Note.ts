import { Schema, model, Document } from 'mongoose';

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export interface INote extends Document {
    // _id: string;
    title: string;
    description: string;
}

export default model<INote>('Note', NoteSchema);
