import express from 'express'
import { createNewEvidence, updateEvidence, getEvidenceById, getAllEvidence } from '../controllers/evidenceController.js'
const evidenceRouter = express.Router()

evidenceRouter.post('/create-evidence', createNewEvidence)
evidenceRouter.put('/update-evidence/:id', updateEvidence)
evidenceRouter.get('/get-evidence/:id', getEvidenceById)
evidenceRouter.get('/get-all-evidence', getAllEvidence)


export default evidenceRouter