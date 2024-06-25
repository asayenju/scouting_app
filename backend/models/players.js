const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const playerSchema = new mongoose.Schema({
    player_id: {
        type: String,
        default: uuidv4 // Automatically generate a random UUID
    },
    name: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    Guardian_name: {
        type: String
    },
    Guardian_email: {
        type: String
    },
    Academy: {
        type: String
    },
    Academy_email: {
        type: String
    },
    Academy_phone_number: {
        type: String
    },
    Appearance: {
        Games: {
            type: Number
        },
        Minutes: {
            type: Number
        },
        Starts: {
            type: Number
        },
        Subbed_On: {
            type: Number
        },
        Subbed_Off: {
            type: Number
        }
    },
    Shooting: {
        Shots: {
            type: Number,
            default: 0
        },
        Shot_Accuracy_Percentage: {
            type: Number,
            default: 0 // This will be calculated based on Shots On Target and Shots
        },
        Shots_On_Target: {
            type: Number,
            default: 0
        },
        Shots_Off_Target: {
            type: Number,
            default: 0
        },
        Shots_Blocked: {
            type: Number,
            default: 0
        },
        Shots_from_Set_Pieces: {
            type: Number,
            default: 0
        },
        Penalties_Taken: {
            type: Number,
            default: 0
        },
        Hit_Woodwork: {
            type: Number,
            default: 0
        }
    },
    Goalkeeping: {
        Saves_Made: {
            type: Number,
            default: 0
        },
        Saves_Made_from_Inside_Box: {
            type: Number,
            default: 0
        },
        Saves_Made_from_Outside_Box: {
            type: Number,
            default: 0
        },
        Save_Percentage: {
            type: Number,
            default: 0 // This will be calculated based on Saves Made and Shots Faced
        },
        Penalties_Faced: {
            type: Number,
            default: 0
        },
        Penalties_Saved: {
            type: Number,
            default: 0
        }
    },
    Goals: {
        Winning_Goal: {
            type: Number,
            default: 0
        },
        Away_Goals: {
            type: Number,
            default: 0
        },
        Home_Goals: {
            type: Number,
            default: 0
        },
        Other_Goals: {
            type: Number,
            default: 0
        },
        Total_Goals: {
            type: Number,
            default: 0
        },
        Non_penalty_Goals: {
            type: Number,
            default: 0
        },
        Penalty_Goals: {
            type: Number,
            default: 0
        },
        Goals_from_Inside_Box: {
            type: Number,
            default: 0
        },
        Goals_from_Outside_Box: {
            type: Number,
            default: 0
        },
        Right_Foot_Goals: {
            type: Number,
            default: 0
        },
        Left_Foot_Goals: {
            type: Number,
            default: 0
        },
        Conversion_Rate_Percentage: {
            type: Number,
            default: 0 // This will be calculated based on Goals and Shots
        }
    },
    Passing: {
        Open_play_Passes_completed: {
            type: Number,
            default: 0
        },
        Open_Play_Passes: {
            type: Number,
            default: 0
        },
        Assists: {
            type: Number,
            default: 0
        },
        Chances_Created: {
            type: Number,
            default: 0
        },
        Passes_Attempted: {
            type: Number,
            default: 0
        },
        Passes_Completed: {
            type: Number,
            default: 0
        },
        Passing_Accuracy_Percentage: {
            type: Number,
            default: 0 // This will be calculated based on Passes Completed and Passes Attempted
        },
        Long_Passes_Attempted: {
            type: Number,
            default: 0
        },
        Long_Passes_Completed: {
            type: Number,
            default: 0
        },
        Long_Pass_Accuracy_Percentage: {
            type: Number,
            default: 0 // This will be calculated based on Long Passes Completed and Long Passes Attempted
        },
        Crosses_Attempted: {
            type: Number,
            default: 0
        },
        Crosses_Completed: {
            type: Number,
            default: 0
        },
        Crossing_Accuracy_Percentage: {
            type: Number,
            default: 0 // This will be calculated based on Crosses Completed and Crosses Attempted
        },
        Open_play_Crosses_Completed: {
            type: Number,
            default: 0
        },
        Corners_Taken: {
            type: Number,
            default: 0
        },
        Through_balls: {
            type: Number,
            default: 0
        },
        Lay_offs_Completed: {
            type: Number,
            default: 0
        },
        Passes_completed_Opp_Half: {
            type: Number,
            default: 0
        },
        Passes_completed_Own_Half: {
            type: Number,
            default: 0
        },
        Forward_Passes: {
            type: Number,
            default: 0
        },
        Backward_Passes: {
            type: Number,
            default: 0
        },
        Sideways_Passes: {
            type: Number,
            default: 0
        }
    },
    Duels: {
        Take_ons_Overrun: {
            type: Number,
            default: 0
        },
        Duels_Contested: {
            type: Number,
            default: 0
        },
        Tackles_Made: {
            type: Number,
            default: 0
        },
        Fouls_from_Tackle_Attempts: {
            type: Number,
            default: 0
        },
        Last_man_Tackles_Made: {
            type: Number,
            default: 0
        },
        Take_ons_completed: {
            type: Number,
            default: 0
        },
        Take_on_Success_Percentage: {
            type: Number,
            default: 0 // This will be calculated based on Take_ons_completed and Take_ons_Overrun
        },
        Fouls_Won: {
            type: Number,
            default: 0
        },
        Fouls: {
            type: Number,
            default: 0
        },
        Penalties_Won: {
            type: Number,
            default: 0
        },
        Aerial_Duels_Contested: {
            type: Number,
            default: 0
        },
        Aerial_Duels_Won: {
            type: Number,
            default: 0
        },
        Aerial_Duel_Success_Percentage: {
            type: Number,
            default: 0 // This will be calculated based on Aerial_Duels_Won and Aerial_Duels_Contested
        },
        Ground_Duels_Contested: {
            type: Number,
            default: 0
        },
        Ground_Duels_Won: {
            type: Number,
            default: 0
        },
        Ground_Duel_Success_Percentage: {
            type: Number,
            default: 0 // This will be calculated based on Ground_Duels_Won and Ground_Duels_Contested
        },
        Duels_Won: {
            type: Number,
            default: 0
        },
        Duels_Success_Percentage: {
            type: Number,
            default: 0 // This will be calculated based on Duels_Won and Duels_Contested
        }
    },
    Defense: {
        Clearances: {
            type: Number,
            default: 0
        },
        Interceptions: {
            type: Number,
            default: 0
        },
        Blocked_Shots: {
            type: Number,
            default: 0
        },
        Clean_Sheets: {
            type: Number,
            default: 0
        },
        Goals_Conceded: {
            type: Number,
            default: 0
        },
        Goals_Conceded_Inside_Box: {
            type: Number,
            default: 0
        },
        Goals_Conceded_Outside_Box: {
            type: Number,
            default: 0
        },
        Own_Goals: {
            type: Number,
            default: 0
        },
        Penalty_Goals_Conceded: {
            type: Number,
            default: 0
        },
        Shots_On_Target_Faced: {
            type: Number,
            default: 0
        },
        Shots_On_Target_Faced_Inside_Box: {
            type: Number,
            default: 0
        },
        Shots_On_Target_Faced_Outside_Box: {
            type: Number,
            default: 0
        }
    },
    Discipline: {
        Total_Cards: {
            type: Number,
            default: 0
        },
        Yellow_Cards: {
            type: Number,
            default: 0
        },
        Red_Cards: {
            type: Number,
            default: 0
        }
    },
    Possession: {
        Handballs: {
            type: Number,
            default: 0
        },
        Corners_Won: {
            type: Number,
            default: 0
        },
        Touches: {
            type: Number,
            default: 0
        },
        Ball_Recoveries: {
            type: Number,
            default: 0
        },
        Possession_Lost: {
            type: Number,
            default: 0
        },
        Offsides: {
            type: Number,
            default: 0
        },
        Touches_in_Opposition_Box: {
            type: Number,
            default: 0
        },
        Times_Tackled: {
            type: Number,
            default: 0
        }
    }
});

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;