from api.models import db, User, Bird_Capture

class Service:

# --------------------------- Captures Service ------------------------------------------

    def get_captures(user_id):
        
        user = User.query.get(user_id)
        if user is None:
            raise APIException('User not found', status_code=404)

        # Return all the captures for the specific id
        userCaptures = Bird_Capture.query.filter_by(user_id=user_id).all()

        # bird = Bird_Capture.query.get()

        userCaptures = list(map(lambda x: x.serialize(), userCaptures)) 

        return userCaptures

    # def get_captures_per_type(fav):
    #     # print(bcolors.WARNING + str(fav) + bcolors.ENDC)
    #     if fav.item_type == "planet":
    #         planet = Planet.query.get(fav.item_id)
    #         return planet.serialize()
    #     if fav.item_type == "character":
    #         character = Character.query.get(fav.item_id)
    #         return character.serialize()
            
    #     return None


# --------------------------- Favorites Service ------------------------------------------

#     def get_favorite_per_type(fav):
#         # print(bcolors.WARNING + str(fav) + bcolors.ENDC)
#         if fav.item_type == "planet":
#             planet = Planet.query.get(fav.item_id)
#             return planet.serialize()
#         if fav.item_type == "character":
#             character = Character.query.get(fav.item_id)
#             return character.serialize()
            
#         return None

#     def get_favorites(user_id):
        
#         user = User.query.get(user_id)
#         if user is None:
#             raise APIException('User not found', status_code=404)

#         # Return all the favorites of the particular id
#         userFavorites = Favorite.query.filter_by(user_id=user_id).all()

#         userFavorites = list(map(lambda x: Service.get_favorite_per_type(x), userFavorites)) 

#         return userFavorites