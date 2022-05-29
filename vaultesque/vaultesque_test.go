package main

import (
	//"flag"
	//"fmt"
	//"os"
	//"log"
	//"reflect"
	//"strings"
	//"io"
	//"encoding/json"
	//"github.com/99designs/keyring"
	"testing"
)

func testGCPVaultExec(t *testing.T) {
	t.Run("Test Successful Command Exection", func(t *testing.T) {
		tst := []string{"exec", "test", "--", "echo", "test"}
		gcvExec := gcpVaultExec(tst)
		gcvAssert := "test\n"
		if !(gcvExec == gcvAssert) {
			t.Errorf("gcpVaultExec(%v)\nwant:\n%v\ngot:\n%v\n", tst, gcvAssert, gcvExec)
		}
	})
	t.Run("Test Failure Mode: args[2]!='--'", func(t *testing.T) {
		tst := []string{"exec", "test", "echo", "test"}
		gcvExec := gcpVaultExec(tst)
		gcvAssert := "err: bad vaultesque input : exec test echo test"
		if !(gcvExec == gcvAssert) {
			t.Errorf("gcpVaultExec(%v)\nwant:\n%v\ngot:\n%v\n", tst, gcvAssert, gcvExec)
		}
	})
	t.Run("Testing Failure Mode: unknown command", func(t *testing.T) {
		tst := []string{"exec", "test", "--", "cmdBad"}
		gcvExec := gcpVaultExec(tst)
		gcvAssert := "err: bad command : cmdBad"
		if !(gcvExec == gcvAssert) {
			t.Errorf("gcpVaultExec(%v)\nwant:\n%v\ngot:\n%v\n", tst, gcvAssert, gcvExec)
		}
	})
}

//gcvAssert := map[string]string{"profile": "test",
//                                "command": "echo test"}
//fmt.Println("TEST:",tst,"\n",gcvAssert)
//if !(reflect.DeepEqual(gcvExec,gcvAssert)) {
// fmt.Println("EXEC:",gcvExec)
