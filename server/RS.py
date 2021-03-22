#!/usr/bin/env python
# coding: utf-8

# In[20]:


import pandas as pd
import numpy as np

userItemData = pd.read_csv('project_ratings_adapted.csv')
userItemData


# In[21]:


#builds empty structure
itemAffinity = pd.DataFrame(columns = ('item1', 'item2', 'score'))
rowCount=0

itemAffinity


# In[22]:


#Get list of unique items - (.tolist) converst array into ordinary list with the same items.
itemList =list(set(userItemData["ItemId"].tolist()))

#Get count of users (len = length)
userCount = len(set(userItemData["ItemId"].tolist()))

#for each item in the list, compare with other items
for ind1 in range(len(itemList)):
 
    #Get list of users who bought item 1.
    item1Users = userItemData[userItemData.ItemId==itemList[ind1]]["userId"].tolist()
    #print("People who liked Item 1 ", item1Users)
    
    #for each item in the list, compare with other items  
    for ind2 in range(ind1, len(itemList)):
    
        if (ind1 == ind2):
            continue
        #Get list of users who bought item 2.
        item2Users = userItemData[userItemData.ItemId==itemList[ind2]]["userId"].tolist()
        #print("People who liked Item 2 ", item2Users)
    
        #Find score. Find the common list of users and divide by total users.
        commonUsers =len(set(item1Users).intersection(set(item2Users)))
        score = commonUsers/ userCount
    
        #Add an Affinity score for item 1, item 2 
        itemAffinity.loc[rowCount] = [itemList[ind1], itemList[ind2],score]
        rowCount +=1
    
        #Add an Affinity score for item 2, item 1. The same score would apply. 
        itemAffinity.loc[rowCount] = [itemList[ind2], itemList[ind1], score]
        rowCount +=1
    
#check the final result
itemAffinity.head()


# In[27]:


searchItem="603c21ec6993a75aefc16320"
recommendList=itemAffinity[itemAffinity.item1==searchItem]    [["item2","score"]]    .sort_values("score",ascending=[0])
                            
print("Recommendations for Item (Boston)\n", recommendList)
print("Top Recommendation is : Venice")


# In[24]:


searchItem="603c223e6993a75aefc16323"
recommendList=itemAffinity[itemAffinity.item1==searchItem]    [["item2","score"]]    .sort_values("score",ascending=[0])
                            
print("Recommendations for Item (Budapest)\n", recommendList)
print("Top Recommendation is : Venice")


# In[ ]:




