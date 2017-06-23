-- View: public.detailled_team_mood

-- DROP VIEW public.detailled_team_mood;

CREATE OR REPLACE VIEW public.detailled_team_mood AS
 WITH mood_view AS (
         SELECT mood.id,
            rank() OVER (PARTITION BY mood.picture_user_id ORDER BY mood.mood_date DESC) AS rnk
           FROM mood
        )
 SELECT m.id, p.nick_name, p.first_name, p.last_name, m.mood_value
   FROM mood m
     JOIN mood_view v ON m.id = v.id AND v.rnk = 1
     JOIN picture_user p ON m.picture_user_id=p.id;

ALTER TABLE public.detailled_team_mood
  OWNER TO backend;

