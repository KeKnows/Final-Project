from fastapi import FastAPI
from backend.routes import auth
from backend.routes import workout
from backend.routes import summary


app.include_router(summary.router)
app.include_router(auth.router, prefix="/auth")
app.include_router(workout.router)
app = FastAPI()
