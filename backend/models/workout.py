from sqlalchemy import Column, Integer, String, Float, Date, ForeignKey
from backend.database import Base

class Workout(Base):
    __tablename__ = "workouts"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    type = Column(String, nullable=False)       # e.g., sprint, lift
    value = Column(Float, nullable=False)       # time in seconds or weight in kg
    date = Column(Date, nullable=False)
