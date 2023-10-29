from fastapi import APIRouter, Body, Request, Response, HTTPException, status
from fastapi.responses import RedirectResponse
from fastapi.encoders import jsonable_encoder
from typing import List

from .models import Users
from .db import db
from .linkedin import get_jobs_from_skills

router = APIRouter()

@router.get("/")
async def root():
    return {"message": "Working!"}

@router.get("/new")
async def new():
    return RedirectResponse(url="/")

@router.post("/new")
async def new_user(user: Users = Body(...)):
    user = jsonable_encoder(user)
    result = db.users.insert_one(user)
    if result.inserted_id:
        # return RedirectResponse(url=f"/?{id}")
        return RedirectResponse(url=f"/")
    
    raise HTTPException(status_code=400, detail="Some Error occured while creating entry. Please check the data!")

@router.post("/big5-score")
async def big5_score(id:str, score: int):
    update_result = db.users.update_one({"_id": id}, {"$set": {"score": score}})
    if update_result.modified_count == 0:
        raise HTTPException(status_code=400, detail=f"Book with ID {id} not found")
    return {"message": "Score received!"}

@router.get("/result/{id}")
async def results(id: str):
    user = db.users.find_one({"_id": id})
    if not user:
        raise HTTPException(status_code=400, detail="Couldn't find any user with the given id")
    return True

@router.route('/skills/{id}}')
def report(id: str):
    # print(f"Collecting data for {id}")
    user = db.users.find_one({"_id": id})

    jobs = get_jobs_from_skills(user['linkedin'])

    return jobs

