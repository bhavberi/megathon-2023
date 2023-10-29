import uuid
from typing import Optional
from pydantic import BaseModel, Field

class Users(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    name: str = Field(...)
    linkedin: str = Field(...)
    twitter: str = Field(...)
    score: str|None = None

    class Config:
        populate_by_name = True

