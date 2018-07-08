#include <eosiolib/eosio.hpp>
using namespace eosio;

class eosfilestore : public eosio::contract {
  public:
      using contract::contract;

      // @abi action
      void upload(std::string chunk) {}
};

EOSIO_ABI( eosfilestore, (upload) )