from pydantic import BaseModel, EmailStr
from typing import Optional


class UserBase(BaseModel):
    email: EmailStr

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int
    event: Optional[str] = None
    experience_level: Optional[str] = None
    goals: Optional[str] = None

    class Config:
        orm_mode = True

from sqlalchemy import Column, Integer, String
from backend.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)

    # Optional user attributes
    event = Column(String, nullable=True)
    experience_level = Column(String, nullable=True)
    goals = Column(String, nullable=True)
