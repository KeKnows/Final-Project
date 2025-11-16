from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import date
from backend.database import get_db
from backend.models.workout import Workout
from backend.security import create_token  # optional if auth needed

router = APIRouter(prefix="/workouts", tags=["Workouts"])

# Create workout
@router.post("/")
def create_workout(user_id: int, type: str, value: float, workout_date: date, db: Session = Depends(get_db)):
    new_workout = Workout(user_id=user_id, type=type, value=value, date=workout_date)
    db.add(new_workout)
    db.commit()
    db.refresh(new_workout)
    return new_workout

# Read all workouts for a user
@router.get("/{user_id}")
def get_workouts(user_id: int, db: Session = Depends(get_db)):
    workouts = db.query(Workout).filter(Workout.user_id == user_id).all()
    return workouts

# Update workout
@router.put("/{workout_id}")
def update_workout(workout_id: int, type: str = None, value: float = None, workout_date: date = None, db: Session = Depends(get_db)):
    workout = db.query(Workout).filter(Workout.id == workout_id).first()
    if not workout:
        raise HTTPException(status_code=404, detail="Workout not found")
    if type:
        workout.type = type
    if value:
        workout.value = value
    if workout_date:
        workout.date = workout_date
    db.commit()
    db.refresh(workout)
    return workout

# Delete workout
@router.delete("/{workout_id}")
def delete_workout(workout_id: int, db: Session = Depends(get_db)):
    workout = db.query(Workout).filter(Workout.id == workout_id).first()
    if not workout:
        raise HTTPException(status_code=404, detail="Workout not found")
    db.delete(workout)
    db.commit()
    return {"message": "Workout deleted"}
