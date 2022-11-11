import EvidenceModel from '../models/EvidenceModel.js'

//  @desc   Create new evidence incident
//  @route  POST /api/evidence/create-evidence
export const createNewEvidence = async (req, res) => {
  const { userId, title, date, time, place, description, imgs } = req.body;

  const newProof = {imgs: imgs};

  try {
    const newEvidence = await EvidenceModel.create({
      userId,
      title,
      date,
      time,
      place,
      description,
      proof: newProof,
    })
    return res.status(201).json({ success: true, evidence: newEvidence })
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

//  @desc   Update evidence incident
//  @route  PUT /api/evidence/update-evidence
// export const updateEvidence = async (req, res) => {
//   const { userId, title, date, time, place, description, imgs } = req.body

// }

//  @desc   Get evidence incident by Id
//  @route  GET /api/evidence/get-evidence
export const getEvidenceById = async (req, res) => {
    
    try {
      EvidenceModel.findById(req.params.id)
        .then((evidence) => {
          res.json({ success: true, evidence: evidence })
        })
        .catch((err) => {
          console.log(err)
          res.json(err)
        })
    } catch (err) {
      console.log(err)
      res.json(err)
    }

  }


//  @desc   Get all evidence incidents
//  @route  GET /api/evidence/get-all-evidence
export const getAllEvidence = async (req, res) => {
    EvidenceModel.find()
      .then((evidence) => {
        res.json({ success: true, evidence: evidence })
      })
      .catch((err) => {
        res.json(err)
        console.log(err)
      })
  }
