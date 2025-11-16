from fastapi import FastAPI
from backend.routes import auth
from backend.routes import workout


app.include_router(auth.router, prefix="/auth")
app.include_router(workout.router)
app = FastAPI()
