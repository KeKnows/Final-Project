from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from backend.database import get_db
from backend.models.workout import Workout
from datetime import datetime, timedelta

router = APIRouter(prefix="/summary", tags=["AI Summary"])

@router.get("/{user_id}")
def weekly_summary(user_id: int, db: Session = Depends(get_db)):
    today = datetime.today().date()
    week_ago = today - timedelta(days=7)
    workouts = db.query(Workout).filter(Workout.user_id == user_id, Workout.date >= week_ago).all()
    
    if not workouts:
        return {"summary": "No workouts logged this week."}

    summary_text = "This week you logged:\n"
    for w in workouts:
        summary_text += f"- {w.date}: {w.type} - {w.value}\n"

    return {"summary": summary_text}
