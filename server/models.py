import uuid
from typing import Optional
from pydantic import BaseModel, Field, AnyHttpUrl

class Users(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    name: str = Field(...)
    linkedin: AnyHttpUrl = Field(...)
    twitter: str = Field(...)
    score: str|None = None

    class Config:
        populate_by_name = True

